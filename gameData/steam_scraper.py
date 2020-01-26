"""
 *   uses libraries Requests, Beautiful soup, and pandas to run this script.
 *   starts by using requests library to get permission from steam website to get HTML code.
 *   then uses BeautifulSoup library to parse the HTML from the website. finally
 *   pandas library organizes the data into specific columns and rows.
 """

from bs4 import BeautifulSoup
import pandas
import requests

MAX_PAGES = 201

def scrape():
    base_url = "https://steamcharts.com/top/p.1"
    my_request = requests.get(base_url)
    data = my_request.text
    soup = BeautifulSoup(data, "html.parser")

    all_games = {}
    page = 1
    count = 0

    while True:
        content = soup.find("tbody")  
        games = content.find_all("tr") 

        for game in games:
            count += 1

            name = game.find("a").text.strip("\n\t\n")
            hours = game.find("td", {"class": "num period-col player-hours"}).text.strip("\n\t ")

            name_clean = name.replace("\n", "")
            hours_clean = hours.replace("\n", "")
            all_games[count] = [name_clean, hours_clean]

        page += 1
        next_link = soup.find("a", href=str("/top/p." + str(page)))

        if page <= MAX_PAGES:
            if next_link is not None:
                new_link = "https://steamcharts.com/top/p." + str(page)
                my_new_request = requests.get(new_link)
                new_data = my_new_request.text
                soup = BeautifulSoup(new_data, "html.parser")
        else:
            break

    all_games_df = pandas.DataFrame.from_dict(all_games, orient='index',
                                         columns=["Title", "Hours Played"])

    all_games_df.to_csv("SteamGamesDataSet.csv")


scrape()

class Planet {
    constructor(x, y, radius, goal, title, hours) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.goal = goal;
        this.title = title + ''; // to string
        this.hours = hours + ''; // to string
        this.small = false;
        this.medium = false;
        this.large = false;
    }

    setSmall() {
        this.small = true;
    }

    setMedium() {
        this.medium = true;
    }

    setLarge() {
        this.large = true;
    }

}


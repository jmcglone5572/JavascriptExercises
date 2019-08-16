function Person(personName) {
    this.name = personName;
    this.info = "This person is called " + this.name;
    this.showInfo = function () {
        alert(this.info);
    }
}

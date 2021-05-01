export class Student {
  public avg!: number;

  constructor(
    public fName: string,
    public lName: string,
    public test1: number,
    public test2: number,
    public test3: number,
    public project1: number,
    public project2: number,
    public project3: number,
    public project4: number,
    public project5: number
  ) {
    this.calAvg();
  }

  private calAvg() {
    this.avg = parseFloat(
      (
        (((this.test1 + this.test2 + this.test3) / 3) * 60 +
          ((this.project1 +
            this.project2 +
            this.project3 +
            this.project4 +
            this.project5) /
            5) *
            40) /
        100
      ).toFixed(2)
    );
  }
}

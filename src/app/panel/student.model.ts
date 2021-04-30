export class StudentModel {
  public avg!: number;

  constructor(
    public fName: string = '',
    public lName: string = '',
    public test1: number = 0,
    public test2: number = 0,
    public test3: number  = 0,
    public project1: number  = 0,
    public project2: number  = 0,
    public project3: number  = 0,
    public project4: number  = 0,
    public project5: number  = 0
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

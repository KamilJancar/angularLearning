export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name, desc, image) {
    this.name = name;
    this.description = desc;
    this.imagePath = image;
  }
}

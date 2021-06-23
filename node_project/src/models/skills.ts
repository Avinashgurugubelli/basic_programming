export class Skill {
    private name: string;
    private experience: number;
    private rating: number;
    private isPrimarySkill: boolean;


    constructor(name: string, experience: number, rating: number, isPrimarySkill: boolean) {
        this.name = name;
        this.experience = experience;
        this.rating = rating;
        this.isPrimarySkill = isPrimarySkill;
    }
}
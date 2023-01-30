export class AudiService {
    
    private data : string [] = ['Audi A1', 'Audi A5', 'Audi A6'];

    getData(): string[]{
        return this.data
    }
    addData(name:string){
        this.data.push(name)
    }
}
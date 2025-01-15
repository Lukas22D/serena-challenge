import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export default class UserDB extends BaseEntity {
 
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    private _name: string;

    @Column({unique: true})
    private _email: string;

    @Column()
    private _password: string;

    // Definição do construtor para inicializar os valores
    constructor(name: string, email: string, password: string) {
        super();
        this._name = name;
        this._email = email;
        this._password = password;
        this.id = undefined;
    }
    
    // Getter e Setter para as propriedades
    public getname(): string {
        return this._name;
    }

    public setname(value: string) {
            this._name = value;
        }

    public getemail(): string {
        return this._email;
    }

    public setemail(value: string) {
            this._email = value;
    }

    public getpassword(): string {
        return this._password;
    }

    public setpassword(value: string) {
            this._password = value;
    }

}

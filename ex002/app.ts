class Department {
    //name: string;
    private employees: string [] = [];

    constructor(private readonly id: string, public name: string) {
        //this.name = n;
    }

    describe(this: Department) {
        console.log(`Departament (${this.id}): ${this.name}`);
    } 

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}


const accounting = new Department('d1','Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();

// accounting.employees[2] = 'Anna' -> isso não seria possível pois tornamos a classe privada, ou seja, não podemos acessar ela do lado externo 

accounting.describe();
// accounting.name = 'New Name' -> isso seria possível pois a classe é pública, podendo ser acessada externamente


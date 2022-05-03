const Employee = require('../library/Employee');


describe("Testing Employee class", () => {
  it("Testing Employee Instance to be an Object", () => {
    const myEmployee = new Employee()
    expect(typeof (myEmployee)).toBe("object")
  })
  it("Testing Employee Name", () => {
    const myEmployee = new Employee("Bruno")
    expect(myEmployee.name).toBe("Bruno")
  })
  it("Testing Employee ID", () => {
    const myEmployee = new Employee("Bruno", 1234)
    expect(myEmployee.id).toBe(1234)
  })
  it("Testing Employee Email", () => {
    const myEmployee = new Employee("Bruno", 1234, "test@email.com")
    expect(myEmployee.email).toBe("test@email.com")
  })
  it("Testing Employee getName", () => {
    const myEmployee = new Employee("Bruno", 1234, "test@email.com")
    expect(myEmployee.getName()).toBe("Bruno")
  })
  it("Testing Employee getEmail", () => {
    const myEmployee = new Employee("Bruno", 1234, "test@email.com")
    expect(myEmployee.getEmail()).toBe("test@email.com")
  })
  it("Testing Employee getId", () => {
    const myEmployee = new Employee("Bruno", 1234, "test@email.com")
    expect(myEmployee.getId()).toBe(1234)
  })
  it("Testing Employee getRole", () => {
    const myEmployee = new Employee("Bruno", 1234, "test@email.com")
    expect(myEmployee.getRole()).toBe("Employee")
  })

})
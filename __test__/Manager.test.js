const Manager = require('../library/Manager');


describe("Testing Manager class", () => {
  it("Testing Manager Instance to be an Object", () => {
    const myManager = new Manager()
    expect(typeof (myManager)).toBe("object")
  })
  it("Testing Manager Name", () => {
    const myManager = new Employee("Bruno")
    expect(myManager.name).toBe("Bruno")
  })
  it("Testing Employee ID", () => {
    const myManager = new Employee("Bruno", 1234)
    expect(myManager.id).toBe(1234)
  })
  it("Testing Employee Email", () => {
    const myManager = new Employee("Bruno", 1234, "test@email.com")
    expect(myManager.email).toBe("test@email.com")
  })
  it("Testing Employee getName", () => {
    const myManager = new Employee("Bruno", 1234, "test@email.com")
    expect(myManager.getName()).toBe("Bruno")
  })
  it("Testing Employee getEmail", () => {
    const myManager = new Employee("Bruno", 1234, "test@email.com")
    expect(myManager.getEmail()).toBe("test@email.com")
  })
  it("Testing Employee getId", () => {
    const myManager = new Employee("Bruno", 1234, "test@email.com")
    expect(myManager.getId()).toBe(1234)
  })
  it("Testing Employee getRole", () => {
    const myManager = new Employee("Bruno", 1234, "test@email.com")
    expect(myManager.getRole()).toBe("Manager")
  })
  it("Testing Employee getOfficeNumber", () => {
    const myManager = new Employee("Bruno", 1234, "test@email.com", 456)
    expect(myManager.getOfficeNumber()).toBe(456)
  })

})
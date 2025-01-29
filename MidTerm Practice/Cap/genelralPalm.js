function generatePalm(data) {
    // คำนวณอายุเฉลี่ย
    const avgAge = Math.floor(data.reduce((sum, person) => sum + person.age, 0) / data.length);
    // รวมงบประมาณทั้งหมด
    const totalBudget = data.reduce((sum, person) => sum + person.budget, 0);
    // เลือกเฉพาะคนที่มี budget อยู่ในช่วง 10,000 ถึง 30,000
    const filteredPeople = data.filter(person => person.budget >= 10000 && person.budget <= 30000);
    // สร้าง array ของเมืองจากคนที่ถูกกรอง
    const cities = filteredPeople.map(person => person.city);
    // สร้าง object ผลลัพธ์
    const palm = {
    age: avgAge,
    budgets: totalBudget,
    city: cities
    };
    return palm;
}
  // ตัวอย่างข้อมูล
const data = [
    { id: 1, name: "John", age: 28, budget: 30000, city: "New York" },
    { id: 2, name: "Jane", age: 35, budget: 15000, city: "London" },
    { id: 3, name: "Mike", age: 25, budget: 5000, city: "Paris" },
    { id: 4, name: "Alice", age: 32, budget: 20000, city: "Tokyo" },
    { id: 5, name: "Bob", age: 40, budget: 10000, city: "Ohio" }
];
// เรียกใช้งานฟังก์ชัน
const result = generatePalm(data);
// แสดงผลลัพธ์
console.log("Updated Data:", result);
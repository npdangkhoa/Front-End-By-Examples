let group = {
    title: 'Our Group',
    students: ["John", "Pete", "Alice"],
    showList(){
        return this.students.map(pStudent => {
            var obj = {title: this.title, student: pStudent};
            return obj;
        })
    }
};


var listStudent = group.showList();

/**
 * [ 
 *   { title: 'Our Group', student: 'John' },
 *   { title: 'Our Group', student: 'Pete' },
 *   { title: 'Our Group', student: 'Alice' } 
 * ]
 * 
 */

console.log(listStudent);
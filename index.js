let {jsPDF} = require("jspdf");
let doc = new jsPDF();
doc.text(10,10,'Amitosh resume');
doc.save('Amitosh.pdf')
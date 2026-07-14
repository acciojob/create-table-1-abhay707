let table = document.getElementById("sampleTable");

function insert_Row() {
	
	const newRow = document.createElement("tr");
	const newCol1 = document.createElement("td");
	const newCol2 = document.createElement("td");
	
	newCol1.textContent = "New Cell1";
	newCol2.textContent = "New Cell2";

	newRow.append(newCol1);
	newRow.append(newCol2);

	table.querySelector("tbody").prepend(newRow);
}

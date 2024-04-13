function set_main() {
	data_people = data_people.filter(person => person.name !== "Jong-Heon Kim");
	data_partnership = data_partnership.filter(company => company.name !== "세종과학예술영재학교");

	ReactDOM.render(<Div_main />, document.getElementById("div_main"))
}
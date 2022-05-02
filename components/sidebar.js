let sidebar = ()=>{
    return`
    <h2>Countires</h2>
        <h3 id="in" onclick="country_Search(this.id)">India</h3>
        <h3 id="ch" onclick="country_Search(this.id)">China</h3>
        <h3 id="us" onclick="country_Search(this.id)">Usa</h3>
        <h3 id="uk" onclick="country_Search(this.id)">United Kingdom</h3>
        <h3 id="nz" onclick="country_Search(this.id)">New Zealand</h3>
      
    `;
}

export default sidebar; 
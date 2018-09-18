import React, { Component } from 'react';

class Filter extends Component {
    setSortAndFilter(e) {
        e.preventDefault();
        let filter = [];
        let checks = document.getElementsByClassName('sortAndFilter');
        for ( let i = 0; i < checks.length; i++) {
            if(checks[i].checked) {
                filter.push(checks[i].value);
            }
        }
        this.props.checkBoxes(filter)
    }

      clearFilter(e) {
          e.preventDefault();
          let checks = document.getElementsByClassName('sortAndFilter');
          for ( let i = 0; i < checks.length; i++) {
                checks[i].checked = false;
          }
          this.props.checkBoxes([])
      }
  render() {
    return (
      <div>
        <form>
            <input type="radio" className="sortAndFilter" value="?_sort=Price:asc" name="price" />Pris, Stigande
            <input type="radio" className="sortAndFilter" value="?_sort=Price:desc" name="price" />Pris, Fallande
            <input type="checkbox" className="sortAndFilter" value="?StockQuantity_gt=0" id="test"/> Finns i lager
            <input type="checkbox" className="sortAndFilter" value="?Category=Vinter" id="test"/> Vinter
            <input type="checkbox" className="sortAndFilter" value="?Category=Sneakers" /> Sneakers
            <input type="checkbox" className="sortAndFilter" value="?Category=Vanlig" /> Vanlig
            <button onClick={this.setSortAndFilter.bind(this)}>Filtrera</button>
            <button onClick={this.clearFilter.bind(this)}>Rensa Filter</button>
        </form>
      </div>
    )
  }
}
export default Filter;

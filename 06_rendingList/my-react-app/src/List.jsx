import PropTypes from "prop-types";

function List(props){

    //PART 1
        // const fruits = [{id:1, name: "apple", calories: 95},
        //                 {id:2, name: "orange", calories: 45}, 
        //                 {id:3, name: "banana", calories: 105}, 
        //                 {id:4, name: "coconut", calories: 159}, 
        //                 {id:5, name: "pineapple", calories: 37}];
        
        //SORTING OBJECTS                    
        // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
        // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
        // fruits.sort((a,b)=>a.calories-b.calories); // NUMERIC (asc)
        // fruits.sort((a,b)=>b.calories-a.calories); // REVERSE NUMERIC (desc)

        //FILTERING OBJECTS
        // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
        //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
        // const listItems = fruits.map(fruit => <li key={fruit.id}>
        //                                          {fruit.name}: &nbsp;
        //                                          <b>{fruit.calories}</b>
        //                                       </li>);

    //PART 2
        const category = props.category;
        const itemList = props.items;
        const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b>
                                               </li>)



    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    }))
}
List.defaultProps = {
    category: "Category",
    items: [] //empty array if no array is passed in
}

export default List
import Button from "../Buttons/Button";

import "./MenuSection.scss";

const MenuSection = (props) => {
    const { data } = props;

    let foodCategories = [];
    for (let i = 0; i<data.length; i++){
        if (!foodCategories.includes(data[i].category)){
            foodCategories.push(data[i].category);
        }
    }

    const getButtonsHtml = () => {
        return (
            <div className="menu-section__buttons">
                {
                    foodCategories.map((category, i) => {
                        let tempStr = category.charAt(0).toUpperCase()+category.slice(1);
                        return <Button key={i} type="menu-sub" to={tempStr} text={tempStr} />
                    })
                }
            </div>
        ) 
    }

    const getMenuCards = () => {
        const generateHtml = () => {
            let cardArr = [];
            for(let i = 0; i<foodCategories.length; i++){
                let tempStr = foodCategories[i].charAt(0).toUpperCase()+foodCategories[i].slice(1);

                const title = <h2 id={tempStr} className="menu-section__category-header">{tempStr}</h2>;

                const itemCards = data.map((item, index) => {
                    if (item.category === foodCategories[i]){
                        return <div key={index}>
                            <h4 className="menu-section__item-name">{item.item}</h4>
                            <p className="menu-section__item-desc">{item.description}</p>
                        </div>
                    }
                })
                cardArr.push(<div key={i} className="menu-section__category">
                {title}
                {itemCards}
                </div>
                )
                
            }
            return cardArr;
        }
        
        return (
        <div className="menu-section__items">
            {generateHtml()}
        </div>)
    
    }

    console.log(foodCategories);

    return (<>
        {getButtonsHtml()}
        {getMenuCards()}
    </>)
}

export default MenuSection;
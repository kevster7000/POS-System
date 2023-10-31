import Topping from "./topping";
import "../styles/drinkCustomize.scss";
interface Props {
  name: string;
}
function DrinkCustomize({ name }: Props) {
  return (
    <div className="customize">
      <div className="customize-grid">
        <div className="customize-drink">{name}</div>
        <div className="ice">
          <div className="ice-title">Ice</div>
          <div className="ice-buttons">
            <button className="ice-button">Regular Ice</button>
            <button className="ice-button">Light Ice</button>
            <button className="ice-button">No Ice</button>
            <button className="ice-button">Extra Ice</button>
          </div>
        </div>

        <div className="sugar">
          <div className="sugar-title">Sugar</div>
          <div className="sugar-buttons">
            <button className="sugar-button">100%</button>
            <button className="sugar-button">80%</button>
            <button className="sugar-button">50%</button>
            <button className="sugar-button">30%</button>
            <button className="sugar-button">0%</button>
            <button className="sugar-button">120%</button>
          </div>
        </div>
        <div className="toppings">
          <div className="toppings-title">Toppings</div>
          <div className="toppings-box">
            <Topping name="pearls"></Topping>
            <Topping name="aloe vera"></Topping>
            <Topping name="herb jelly"></Topping>
            <Topping name="pudding"></Topping>
            <Topping name="mini pearl"></Topping>
            <Topping name="crystal boba"></Topping>
            <Topping name="lychee jelly"></Topping>
            <Topping name="red bean"></Topping>
            <Topping name="aiyu jelly"></Topping>
          </div>
        </div>
      </div>
      <button className="customize-confirm">Confirm</button>
    </div>
  );
}

export default DrinkCustomize;
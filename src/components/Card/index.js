import "./index.css";

const Card = () => {
  const local = JSON.parse(localStorage.getItem("mat"));
  console.log(local);
  const zero = (operation) => (!operation ? 0 : operation(0));
  const one = (operation) => (!operation ? 1 : operation(1));
  const two = (operation) => (!operation ? 2 : operation(2));
  const three = (operation) => (!operation ? 3 : operation(3));
  const four = (operation) => (!operation ? 4 : operation(4));
  const five = (operation) => (!operation ? 5 : operation(5));
  const six = (operation) => (!operation ? 6 : operation(6));
  const seven = (operation) => (!operation ? 7 : operation(7));
  const eight = (operation) => (!operation ? 8 : operation(8));
  const nine = (operation) => (!operation ? 9 : operation(9));
  const plus = (number) => (other_num) => other_num + number;
  const minus = (number) => (other_num) => other_num - number;
  const times = (number) => (other_num) => other_num * number;
  const divided_by = (number) => (other_num) => other_num / number;
  return (
    <div>
      <h4>Master Activity List:</h4>
      {local.map((item, index) => (
        <li className="list" key={index}>
          {item.input}:{eval(item.input)}
        </li>
      ))}
    </div>
  );
};

export default Card;

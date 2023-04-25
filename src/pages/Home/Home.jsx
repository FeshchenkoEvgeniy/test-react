import { Outlet } from "react-router-dom";
import example from "../../assets/exampe-tweets-card.jpg";
import { DivWrapper, HomeLink } from "./Home.styled";
export const Home = () => {
  return (
    <DivWrapper>
      <h1>Тестове завдання</h1>
      <h3>
        Мета: створити картки твітів та додати інтерактивності при клікові на
        кнопку
      </h3>
      <img src={example} alt="example" width={530} />
      <p
        style={{ marginBottom: "20px", fontStyle: "italic", fontSize: "18px" }}
      >
        Загальний вигляд картки у двох станах - Follow та Following
      </p>
      <div>
        <HomeLink to="tweets">Go to Tweets</HomeLink>
      </div>
      <Outlet />
    </DivWrapper>
  );
};

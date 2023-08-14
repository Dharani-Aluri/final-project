import logo from "../assets/logo-color.svg";
import "./Home.css";
const Home = () => {
    return (
        <div class="home-container">
            <div class="logo-container">
                <img className="logo" src={logo} alt="Recipe Book Logo" />
            </div>
            <hr />
            <div class="description-container">
                <p>
                    Recipe Book is here to help you cook delicious meals with
                    less stress and more joy. We offer recipes and cooking
                    advice for home cooks, by home cooks. Helping create
                    “kitchen wins” is what we’re all about.
                </p>
                <p>
                    Everyone is welcome at the Recipe Book: people of all races,
                    religions, genders, sexual orientations, ages, backgrounds,
                    and abilities. We strive to be a resource for every home
                    cook, and we consciously work to make this inclusion felt in
                    every part of the site, from the individuals we hire to the
                    recipes we share.
                </p>
                <p>
                    Our recipes primarily use fresh, unprocessed ingredients but
                    we also believe there is a time and a place for canned,
                    frozen, and other prepared ingredients. We believe in a diet
                    that includes a wide variety of foods: real butter and
                    cream, extra virgin olive oil, eggs, lots of fruits and
                    vegetables, and protein from meat, fish, beans, and cheese.
                    Plus cake for dessert. <br />
                    <br />
                    There are three things we think about when deciding if a
                    recipe is good enough to go on Recipe Book: <br />
                    <br />
                    <b>First, does it work?</b> Recipes need to be easy to
                    follow and provide reliable results, every time.
                    <br />
                    <br />
                    <b>Second, is it delicious?</b> Does the dish make us smile
                    inside and out? Do we want to eat the whole batch by
                    ourselves? <br />
                    <br />
                    <b>Third, is it worth the effort?</b> Do we want to make it
                    again (and again and again)?
                </p>
            </div>
        </div>
    );
};
export default Home;

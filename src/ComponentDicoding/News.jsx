import PropTypes from 'prop-types';

const News = () => {
    const someNews = [
        {
          title: 'CNN Acuire BEME',
          date: 'March 20 2022',
          content: "CNN purchased Casey Neistat's Beme app for $25million.",
          image: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'React and the WP-API',
          date: 'March 19 2022',
          content: 'The first ever decoupled starter theme for React & the WP-API.',
          image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'Nomad Lifestyle',
          date: 'March 19 2022',
          content: 'Learn our tips and tricks on living a nomadic lifestyle.',
          image: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Travel',
          link: '#'
        }
    ];
    return (
        <div className="w-full mt-5">
            <Header />
            <Card {...someNews[0]}/>
            <Card {...someNews[1]}/>
            <Card {...someNews[2]}/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Latest News</h1>
            <p>Covering March and April 2022</p>
        </div>        
    );
}

const Card = (props) => {
    return (
        <div className="p-5 border mt-2 mb-5">
            <CardHeader category={props.category} image={props.image}/>
            <CardBody date={props.date} title={props.title} content={props.content}/>   
        </div>
    );
}

const CardHeader = (props) => {
    return (
        <>
            <h3 className="text-xl"><b>{props.category}</b></h3>
            <img className="mb-5" src={props.image} alt=""/>
        </>
    );
}

const CardBody = (props) => {
    return (
        <>
            <p className="mb-5"><b>Release Date: </b> {props.date}</p>
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p className="text-sm">{props.content}</p>
            <Button/>
        </>
    );
}

const Button = () => {
    return (
        <button className="bg-slate-600 p-1 w-full text-white rounded-lg mt-5">Find Out More</button>
    );
}

const cardPropTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    link: PropTypes.string
};

Card.propTypes = cardPropTypes;
CardBody.propTypes = cardPropTypes;
CardHeader.propTypes = cardPropTypes;

export default News;
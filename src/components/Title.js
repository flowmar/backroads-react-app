const Title = (props) => {
  const { title, subtitle } = props;
  return (
    <div className='section-title'>
      <h2>
        {title}
        &nbsp;
        <span>{subtitle}</span>
      </h2>
    </div>
  );
};

export default Title;

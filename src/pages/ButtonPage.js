import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {}
  return (
    <div>
      <div>
        <Button secondary outline rounded
          className="mb-5" 
          // it will be accessed through rest only
          // otherwise it won't work as in Button component
          // we already have same prop named className
          // that will overwrite this className
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline
          onMouseEnter={handleClick}
        >
          <GoDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning
          onMouseLeave={handleClick}
        >
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

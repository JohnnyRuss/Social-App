import { Container, Img } from './styled';

function Image({ onClick, src, alt, dimention = [], ratio, radius, position, breakPoints }) {
  return (
    <Container
      width={dimention[0] ? dimention[0] : ''}
      height={dimention[1] ? dimention[1] : ''}
      ratio={ratio}
      radius={radius}
      position={position}
      breakPoints={breakPoints}>
      <Img src={src} alt={alt} onClick={onClick} />
    </Container>
  );
}

export default Image;

import Card from './Card'
import {Container} from './style'



const BannerCard = ({data}) => {
  return (
    <Container>
      {data.map((item)=>{
        return(
          <Card ImageSrc={item.img} key={item.id}/>
        )
      })}
    </Container>
  )
}

export default BannerCard
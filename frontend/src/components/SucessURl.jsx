import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';
const SucessURl = () => {
const navigate =useNavigate()
  return (
    <div style={{display:'flex',alignItems:"center", justifyContent:"center", height:"100vh", flexDirection:"column"}}>
      <p style={{fontSize:"30px",color:"orangered"}}>Thank you for your purches</p>
      <p onClick={()=>navigate('/')} style={{color:"blue",fontWeight:"bold", fontSize:"25px"}}>Go back to the website</p>
      <Confetti
       drawShape={ctx => {
        ctx.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }}
    />
    </div>
  );
};

export default SucessURl;

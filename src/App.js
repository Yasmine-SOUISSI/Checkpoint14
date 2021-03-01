import "./styles.css";
import image from "./imageInSrc/image.jpg"
export default function App() {
  return (
    <>
    
    <div>
 <h1 class="title red">SOUISSI Yasmine</h1>

 <br />

<img src={image} width="320" height="240" alt="source"/>
<br />

 <img  width="320" height="240"
 src="/imageInPublic.jpg"  alt="public"/>
</div> 


<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4"/ >

</video>




</>
  );
}

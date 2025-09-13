import herobg from '../../Assets/Home/home-bg.mp4';


export default function Homehero() {

return(

    <div>
        <video src={herobg} autoPlay loop muted style={{
            position: "fixed",
            right: 0,
            bottom: 0,
            minWidth: "100%",
            minHeight: "100%",
            zIndex: -1
        }}/>
    </div>
);


};
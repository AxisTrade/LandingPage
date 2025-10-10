<script>
    import '../styles/components/aboutus.css'
    import BlurButton from '../elements/blurButton.svelte'
    const button1 = {
        heading: "Shortened transaction cycles",
        information: "In weeks, buyers and sellers are able to interact with each other. Fast tracking the vetting process for mining",
        imgSrc: "/images/ClockIcon.png" 
    };

    const button2 = {
        heading: "Direct buyer and seller interaction",
        information: "Connects buyers and sellers directly by eliminating middlemen and reducing commission fees",
        imgSrc: "/images/HandShakeIcon.png"
    };

    const button3 = {
        heading: "Standardized procedures",
        information: "Streamlined communication workflows with contracts in multiple languages. ",
        imgSrc: "/images/FileIcon.png"
    };
</script>

<section>
<div class="container"> 
    <h3> A <span>new way</span> of <span>buying</span> and <span>selling</span></h3>
    <p>
        Through AI-powered verification, smart contracts, and real-time reputation scoring, we create an environment where physical commodities like iron ore, copper,and gold can be traded securely, efficiently, and transparently. At Axistrade, trust isn’t an add-on—it’s the foundation of every transaction.
    </p>
    
    <div class="aboutUsPointsContainer">
        <BlurButton 
            extraClassName="aboutUsPointsItem"
            heading={button1.heading}
            information={button1.information}
            imgSrc={button1.imgSrc}
        />
        
        <BlurButton 
            extraClassName="aboutUsPointsItem"
            heading={button2.heading}
            information={button2.information}
            imgSrc={button2.imgSrc}
        />
        
        <BlurButton 
            extraClassName="aboutUsPointsItem"
            heading={button3.heading}
            information={button3.information}
            imgSrc={button3.imgSrc}
        />
         
    </div>
</div>
</section>
import logohorizon from '../../img/logo/horizonwhite.svg';
import oweek from '../../img/logo/oweekwhite.svg';
import uc from '../../img/logo/ucwhite.png';
import bg from '../../img/bg/Schedulebg.svg';
import topeng from '../../img/topeng/topeng4.svg';
import dot from '../../img/dot2.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MapsModal from '../MapsModal';
import SpotifyModal from '../SpotifyModal';
import SocialIcons from '../../subcomponents/SocialIcons';
import PowerButton3 from '../../subcomponents/PowerButton3';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
min-height: 100vh;
overflow:hidden;
position: relative;

h1 {
    font-size: 3em;
}

h2 {
    font-size: 1.3em;
}
`

const Container = styledComponents.div`
padding: 2rem;
`

const Rightlogo = styledComponents.div`
position: fixed;
right: calc(2rem);
z-index: 1;
display: flex;
gap: 10px;
`

const Leftlogo = styledComponents.div`
position: fixed;
left: calc(2rem);
z-index: 1;
`

const Content = styledComponents.div`
padding: 3vw 15vw;
display: flex;
flex-direction: column;
justify-content: center;
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: fixed;
right: -5vw;
top: 50%;
`

const Faq = styledComponents.div`
text-align: left;
`

const Flex = styledComponents.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 10px;
`

const Dot = styledComponents.img`
height: 15px;
`

const Mobilisasi = () => {

    const [showMapsModal, setShowMapsModal] = useState(false);
    const [showSpotifyModal, setShowSpotifyModal] = useState(false);

    return ( 
        <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
            <MapsModal showMapsModal={showMapsModal} setShowMapsModal={setShowMapsModal} />
            <SpotifyModal showSpotifyModal={showSpotifyModal} setShowSpotifyModal={setShowSpotifyModal} />
            <SocialIcons setShowMapsModal={setShowMapsModal} setShowSpotifyModal={setShowSpotifyModal} />

            <Container>         
                <PowerButton3 />
                
                <Leftlogo>
                    <Link to="/">
                        <img src={logohorizon} alt="" width="120" /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" width="55" /> 
                    <img src={uc} alt="" width="55" />                    
                </Rightlogo>

                <Content>
                    <h1>MOBILISASI CLOSING</h1>

                    <Faq>
                        <Flex>
                            <Dot src={dot} />
                            <span>Pukul 14.00 - 16.00 (sesuai pembagian kloter) trainee di drop oleh orang tua atau pengantar  trainee di depan lobby golf /dekat ruko-ruko dan diarahkan oleh SID/panitia  ke arah selanjutnya yaitu ke driving range.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Saat memasuki area Palimanan, Trainee wajib melakukan pemeriksaan suhu badan yang akan diarahkan oleh panitia O-Week.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Setelah diarahkan oleh SID dan tiba di driving range, trainee scan barcode di panggung.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Barcode akan mengarahkan ke google form, dimana trainee harus mengupload data diri dan foto selfie dengan layar led panggung yang menunjukkan jam.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Google form akan ditutup jika sudah melebihi batas jam dan trainee yang belum absen akan dianggap telat.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee yang kelompok Oweek-nya sudah lengkap diperbolehkan untuk foto di photobooth selama rentang waktu pukul 15.00 - 16.00.</span>
                        </Flex>
                    </Faq>
                </Content>

            </Container>
            <Topeng src={topeng} 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            />
        </MainContainer>
     );
}
 
export default Mobilisasi;
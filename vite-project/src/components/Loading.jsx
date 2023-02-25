import { Flex } from "@chakra-ui/react";
import ReactLoading from "react-loading";
import '../styles.css';
import Image from '../assets/rainy.gif'
import ProgressBar from '../assets/progressBar.gif'

export default function Loading() {
    return (
        <div className="loadScreen">
            <Flex justify={'center'} align={'end'}  minHeight={'50vh'}>
                <img style={{display: 'block'}}src={Image} width="10%"></img>
            </Flex>
                <img className='center' src={ProgressBar} width="5%"></img>
        </div>
    );
}
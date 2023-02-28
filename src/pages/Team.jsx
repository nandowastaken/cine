import TeamCard from "../components/TeamCard"
import Carousel from 'react-elastic-carousel'
import { members } from '../jsons/team.json'
export default function Team() {
    return (
        <>
            {/* === SEÇÃO TEAM === */ }
            <section id='team' className='team'>
                <p className='teamTitle'>Nossa Equipe</p>
                <Carousel itemsToShow={2} showArrows={false}>
                    {members.map((member) => {
                        return <TeamCard name={member.name} function={member.function} desc={member.desc} image={member.image} />
                    })}
                </Carousel>
            </section>
        </>
    )
}
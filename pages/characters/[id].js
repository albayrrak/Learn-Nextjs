import { useRouter } from 'next/router'

const CharacterDetail = ({ character }) => {



    return (
        <>
            <a
                href="/characters"
                className='character-info'
            >
                <div className='images'>
                    <img src={character.image} alt='' />
                </div>

                <span className='title'>{character.name}</span>

                <div className='character-property '>
                    <span>
                        Gender <p>{character.gender}</p>{" "}
                    </span>
                    <span>
                        Species <p>{character.species}</p>{" "}
                    </span>
                    <span>
                        Alive? <p>{character.status}</p>{" "}
                    </span>
                </div>
            </a>
            <style jsx> {`
                .character-info {
                    position: absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%, -50%);
                    background: #fff;
                    width: 20%;
                    height: 300px;
                    border-radius: 10px;
                    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 5px;
                }

                .character-info .images {
                    width: 100%;
                    height: 200px;
                    background: red;
                    border-radius: 10px;
                }

                .character-info .images img {
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                }

                .character-info .title {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 10px;
                }

                .character-info .character-property {
                    width: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 5px;
                    text-align: center;
                }

                .character-info .character-property span {
                    width: 33%;
                    font-size: 12px;
                    font-weight: 900;
                    color: rgba(0, 0, 0, 0.5);
                    margin-bottom: 3px;
                    border-right: 1px solid #ccc;
                }

                .character-info .character-property span p {
                    font-size: 10px;
                    font-weight: normal;
                    color: rgb(0, 0, 0);
                }
                `}</style>
        </>
    )
}

export default CharacterDetail

export async function getServerSideProps({ params }) {

    const data = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const character = await data.json()

    return {
        props: { params, character }
    }
}


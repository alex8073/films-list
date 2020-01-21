import React from 'react';
import styles from './Actors.module.css';
import Preloader from '../common/Preloader/Preloader';

const Actors = (props) => {

    return (
        <section className={styles.actors}>
            <div className={styles.actors_inner_wrapper}>
                {props.isFetching
                    ? <Preloader/>
                    : <div className={styles.actors_main_content}>
                        <div>
                            {props.actors.map(a => {
                                return <div key={a.name} className={styles.actors_item}>
                                    <span>{a.name}</span>
                                    <button className={styles.delete} onClick={() => {
                                        props.deleteActor(a.name)
                                    }}>Удалить актера
                                    </button>
                                </div>
                            })}
                        </div>
                        <div>
                            {props.newActors.map(a => {
                                return <div key={a.id} className={styles.actors_item}>
                                    <span id={a.id}>{a.name}</span>
                                    <button className={styles.delete} onClick={() => {
                                        props.deleteNewActor(a.id)
                                    }}>Удалить актера
                                    </button>
                                </div>
                            })}
                        </div>
                        <div>
                            <div className={styles.actors_item}>
                                <input onChange={props.onNewActorNameBodyChange}
                                       value={props.newActorNameBody}
                                       placeholder='Введите имя актера'/>
                                <button className={styles.add} onClick={() => {
                                    props.addNewActor()
                                }}>Добавить актера
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
};

export default Actors;
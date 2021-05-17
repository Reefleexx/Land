import React from 'react'
import classes from './Main.module.scss'
import Separator from "../../components/Separator/Separator";
import Advantages from "../../components/Advantages/Advantages";
import Features from "../../components/Features/Features";
import Popular from "../../components/Popular/Popular";

const Main = (props) => {

    const items = [
        {
            header: '20',
            text: 'Можно чистить зубы на протяжении 20 дней без подзарядок.'
        },
        {
            icon: 'fas fa-tint-slash',
            text: 'Не боиться воды, имеет стандарт влагозащиты IPX7. Можно и даже нужно промывать щетку под напором' +
                ' для соблюденя' +
                ' гигиены'
        },
        {
            header: '90',
            text: '90 дней гарантии от официального производителя'
        },
        {
            icon: 'fas fa-shield-alt',
            text: 'Неимоверно компактная, антикоррозийный покрытие, пласмасовая щетка-насадка'
        }
    ]

    const renderPreviewText = (text) => {
        return (
            <div className={classes.preview_text}>
                {
                    text.split('#').map((row, i, arr) => {
                        if (i < arr.length) {
                            return <div className={classes.preview_text_block} key={i}>
                                {row}
                            </div>
                        }else {
                            return <div className={classes.preview_text_block} key={i}>
                                {row}
                            </div>
                        }
                    })
                }
            </div>
        )
    }

    return(
        <div className={classes.Main}>
            <div className={classes.wrapper}>
                <div className={classes.preview_container}>
                    <div className={classes.preview_block}>
                        {
                            renderPreviewText('Эффективная мощность для более эффективной очистки# Высокоэффективный звуковой двигатель с магнитнойлевитацией# Высокоплотная, антикоррозионная, безметалловая насадка-щетка# Несколько настраиваемых режимов щетки')
                        }
                        <div className={classes.preview_btn}>
                            <button>
                                Купить
                            </button>
                        </div>
                    </div>
                </div>

                <Separator text={"Что вы получите"}/>

                <Advantages items={items}/>

                <Features/>

                <Popular/>
            </div>
        </div>
    )
}

export default Main
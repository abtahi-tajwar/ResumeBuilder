import React from 'react'
import { Section, text_sizes, colors, fonts, spacing } from '../Style.style'



function Listings({ title, lists }) {
    return (
        <React.Fragment>
            <Section>
                <h4 style={styles.title}>{title}</h4>
                {lists.map(item => {
                    return(<div style={styles.item}>
                        <b style={styles.items.title}>{item.title}</b> &#183; <span style={styles.items.subtitle}>{item.subtitle}</span>
                        <p style={styles.items.date}>{item.date}</p>
                        <p style={styles.items.extra}>{item.extra}</p>
                        <p>{item.description}</p>
                    </div>)
                })}                
            </Section>
        </React.Fragment>
    )
}

Listings.defaultProps = {
    title: 'Listings',
    lists: [
        {
            title: 'Item 1',
            subtitle: 'Place list items according to your priority',
            date: 'month 20xx - present',
            extra: '',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
        },
        {
            title: 'Item 2',
            subtitle: 'Place list items according to your priority',
            date: 'month 20xx - present',
            extra: '',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
        },
        {
            title: 'Item 3',
            subtitle: 'Place list items according to your priority',
            date: 'month 20xx - present',
            extra: '',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
        }
    ]
}

const styles = {
    item: {
        marginBottom: spacing.standard
    },
    title: {
        fontWeight: '700',
        color: colors.primary,
        marginBottom: '10px',
        textTransform: 'uppercase',
        fontFamily: fonts.secondary,
        fontSize: text_sizes.text_md
    },
    items: {
        title: {
            fontSize: text_sizes.text_md
        },
        subtitle: {
            fontSize: text_sizes.text_md
        },
        date: {
            color: colors.gray,        
        },
        extra: {
            color: colors.gray,
            marginBottom: spacing.linegap
        }
    }    
    
}
export default Listings

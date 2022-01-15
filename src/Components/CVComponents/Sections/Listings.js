import React from 'react'
import { Section, text_sizes, colors, fonts, spacing } from '../Style.style'
import styled from 'styled-components'

function Listings({ title, items, theme }) {
    return (
        <React.Fragment>
            <Section>
                <Title>{title}</Title>
                {items.map(item => {
                    return(
                        <ListItem style={styles.item}>
                            <div className="title"><b>{item.title}</b> &#183; <span>{item.subtitle}</span></div>
                            <p className="date">{item.date}</p>
                            <a href={item.link}>{item.link}</a>
                            <p className="extra">{item.extra}</p>
                            <p>{item.description}</p>
                        </ListItem>)
                })}                
            </Section>
        </React.Fragment>
    )
}

Listings.defaultProps = {
    title: 'Listings',
    items: [
        {
            title: 'Item 1',
            subtitle: 'Place list items according to your priority',
            link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
            date: 'month 20xx - present',
            extra: '',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
        },
        {
            title: 'Item 2',
            subtitle: 'Place list items according to your priority',
            link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
            date: 'month 20xx - present',
            extra: '',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
        },
        {
            title: 'Item 3',
            subtitle: 'Place list items according to your priority',
            link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
            date: 'month 20xx - present',
            extra: '',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
        }
    ]
}

const Title = styled.div`
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: ${spacing.standard};
    text-transform: uppercase;
    font-family: ${fonts.secondary};
    font-size: ${text_sizes.text_md};
`;
const ListItem = styled.div`
    font-size: ${text_sizes.text_sm};
    & .title {
        font-size: ${text_sizes.text_md};
        & span {
            font-style: italic;
            color: ${colors.gray};
        }
    }
    & .date {
        color: ${colors.gray};
    }
    & .extra {
        color: ${colors.gray};
        margin-bottom: ${spacing.linegap};
    }
`

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

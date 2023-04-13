import { Card } from '@mui/material'
import React from 'react'
import StringToHTMLParser from 'src/core/utils/StringToHtmlParser'
import styles from './TextCard.module.css'

interface ITextCardProps {
    htmlValue?: string
}

const TextCard = (textCardProps: ITextCardProps) => {
    const { htmlValue } = textCardProps
    return (
        <React.Fragment>
            <Card className={styles['text-card-container']}>
                {StringToHTMLParser(htmlValue)}
            </Card>
        </React.Fragment>
    )
}

export default TextCard
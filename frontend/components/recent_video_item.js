import React from 'react'

const RecentVideoItem = props => <iframe src={`https://www.youtube.com/embed/${props.id}`} frameBorder="0" title={props.id} allowFullScreen />

export default RecentVideoItem

import React from "react";

// const Frame = ({children, title, footer}) => <div className="frame">
//     <header>{title ?? 'Keret címe'}</header>
//     {children}
//     <footer>{footer || 'Lábléc'}</footer>
// </div>
const Frame = ({ children, title, footer }) => <div style={
    {
        border: '2px solid blue',
        borderRadius: 10,
        margin: 10,
        padding: 10
    }
}>
    <header>{title ?? 'Keret címe'}</header>
    {children}
    <footer>{footer || 'Lábléc'}</footer>
</div>

export default Frame;
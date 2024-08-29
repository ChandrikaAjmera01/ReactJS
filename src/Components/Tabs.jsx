//  1st Approach

//export default function({children,buttons, buttonContainer}){
//     const ButtonContainer = buttonContainer;
//     return(
//     <>
//         <ButtonContainer>
//             {buttons}
//         </ButtonContainer>
//         {children}
//     </>) 
// }


// 2nd Approach
// export default function({children,buttons, ButtonContainer}){
//     return(
//     <>
//         <ButtonContainer>
//             {buttons}
//         </ButtonContainer>
//         {children}
//     </>) 
// }

// 3rd Approach
export default function({children,buttons, ButtonContainer ="menu"}){
    return(
    <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>) 
}
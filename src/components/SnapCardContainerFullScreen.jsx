
export const SnapCardContainerFullScreen = ({ children, bgColor }) => {

    return (
        <div className={`
                        snap-start
                        z-0
                        h-screen
                        w-full
                        ${ bgColor }
                        flex
                        justify-center
                        items-center`}
        >
            { children }
        </div>
    )
}

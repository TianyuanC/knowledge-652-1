import React from "react";
import Embed from "react-runkit";
import scriptLoader from "react-async-script-loader";

const Code = scriptLoader("https://embed.runkit.com")(
    ({ isScriptLoaded, ...rest }) =>
        isScriptLoaded ? <Embed nodeVersion="11" {...rest} /> : <></>
);

/**
 * Customized based on https://github.com/pranaygp/mdx-code
 * Doesn't work since the mdx-deck upgrade
 * Customized the traversal like follows
 */
export const LiveCode = ({ children }) => {
    const [pre] = React.Children.toArray(children.props.children);

    const source = pre.props.children;
    const title = pre.props.metaString;
    const component = <Code source={source} title={title} />;

    return (
        <div
            style={{
                width: "60vw"
            }}
        >
            <h2>{title}</h2>
            {component}
        </div>
    );
};

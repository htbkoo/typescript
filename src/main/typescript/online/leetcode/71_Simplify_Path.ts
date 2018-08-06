/*

Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"

Corner Cases:

    Did you consider the case where path = "/../"?
    In this case, you should return "/".
    Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
    In this case, you should ignore redundant slashes and return "/home/foo".

* */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath_slow = function (path: string): string {
    const BACK = "..", DOT = '.';
    return '/' + path.split(/\/+/).reduce((stack, part) => {
        if ((part.length > 0) && (DOT !== part)) {
            if (BACK === part) {
                stack.pop();
            } else {
                stack.push(part);
            }
        }
        return stack;
    }, []).join('/');
};

var simplifyPath = function (path: string): string {
    const BACK = "..", DOT = '.';
    return '/' + path.split("/").reduce((stack, part) => {
        if ((part.length > 0) && (DOT !== part)) {
            if (BACK === part) {
                stack.pop();
            } else {
                stack.push(part);
            }
        }
        return stack;
    }, []).join('/');
};

export default simplifyPath;
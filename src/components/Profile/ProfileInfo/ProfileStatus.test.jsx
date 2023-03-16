import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Test-Run"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Test-Run")
    })

    test("After creation <span> with status should be displayed", () => {
        const component = create(<ProfileStatus status="Test-Run"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("After creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Test-Run"/>);
        const root = component.root;

        expect(() => {
            root.findByType("input")
        }).toThrow();
    })

    test("After creation <span> with status should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Test-Run"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Test-Run")
    })

    test("<input> should be displayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status="Test-Run"/>);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("Test-Run")
    })

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="Test-Run" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1)
    })

})
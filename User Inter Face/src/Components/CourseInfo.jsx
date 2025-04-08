import { FaGraduationCap } from "react-icons/fa6";

const CourseInfo = () => {
    return (
        <>
            <div className="courseBox">
                <div className="course1">
                    <h1 className="courseh1">All Course <FaGraduationCap className="courseicon" /></h1>
                    <p className="courseP">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laboriosam maiores quae nam est, maxime vero doloremque quam illo in voluptas perspiciatis voluptatum nisi. Ad eaque nihil saepe temporibus tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad praesentium, quod provident porro soluta obcaecati ab dolore dolor sunt tempora quisquam! Ullam saepe ad accusantium non mollitia sit accusamus.
                    </p>
                </div>
                <div className="course2">
                    <img src="https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="courseimg" />
                </div>

            </div>
        </>
    )
}

export default CourseInfo;

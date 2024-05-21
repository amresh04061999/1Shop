import AddImages from "./component/AddImages"
import AddLinks from "./component/AddLinks"
import ContactUs from "./component/ContactUs"



function SubFooterComponent() {
    return <>
        <div className="bg-custom-color flex flex-col p-3">
            <div><AddImages /></div>
            <div className=" my-5 flex items-center justify-around">
                <div><ContactUs /></div>
                <div><AddLinks /></div>

            </div>
        </div>
    </>
}
export default SubFooterComponent
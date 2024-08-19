// filterProjectByKeyWord = (event: EventTarget) => {
//     const { value } = event as HTMLInputElement;
//     const filterProjects = this.props.projects.filter((project) => {
//         return project.titre.toLowerCase().includes(value.toLowerCase());
//     });
//     this.setState({ filterProjects });
// }

// filterProjectByMonth = (event: EventTarget) => {
//     const { value } = event as HTMLSelectElement;
//     const filterProjects = this.props.projects.filter((project) => {
//         return (getMonth(project.date_created) + 1) === parseInt(value);
//     });
//     this.setState({ filterProjects });
// }


export class GenericHelper {
    public static filterArryByValue<T>(array: T[], value: string, key: string): T[] {
        return array.filter((item) => {
            return (item as any)[key].toLowerCase().includes(value.toLowerCase());
        });
    }
}



// Individual Accordion Item Component
const AccordionItem = ({ title, content, isActive, onToggle }) => {
    return (
      <div className="accordion-item">
        <div className="accordion-header" onClick={onToggle}>
          <h2>{title}</h2>
          <span>{isActive ? '-' : '+'}</span>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };

  export default AccordionItem;